import { useEffect, useState } from "react";

import { VenomConnect } from "venom-connect";

import { Button } from "@mantine/core";

import { truncate } from "@/src/lib/utils";

export default function VenomConnectWallet({
  venomConnect,
}: {
  venomConnect: VenomConnect | undefined;
}) {
  const [venomProvider, setVenomProvider] = useState<any>(null);
  const [address, setAddress] = useState(undefined);

  const getAddress = async (provider: any) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.address.toString();
  };
  // Any interaction with venom-wallet (address fetching is included) needs to be authentificated
  const checkAuth = async (_venomConnect: any) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) await getAddress(_venomConnect);
  };
  // This handler will be called after venomConnect.login() action
  // connect method returns provider to interact with wallet, so we just store it in state
  const onConnect = async (provider: any) => {
    setVenomProvider(provider);
    await onProviderReady(provider);
  };
  // When our provider is ready, we need to get address and balance from.
  const onProviderReady = async (provider: any) => {
    const venomWalletAddress = provider
      ? await getAddress(provider)
      : undefined;
    setAddress(venomWalletAddress);
  };
  useEffect(() => {
    // connect event handler
    const off = venomConnect?.on("connect", onConnect);
    if (venomConnect) {
      checkAuth(venomConnect);
    }
    // just an empty callback, cuz we don't need it
    return () => {
      off?.();
    };
  }, [venomConnect]);

  const connectWallet = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };

  const disconnectWallet = async () => {
    if (!venomConnect) return;

    venomProvider?.disconnect(); // This handler will be called after venomConnect.disconnect() action
    setAddress(undefined);
  };

  /*
    Set loading state while VenomProvider is initializing - for any errors, venomProvider will be undefined
  */
  if (venomProvider === null) {
    return (
      <Button
        radius={"md"}
        color="gray.6"
        bg={"#6b7280"}
        loading={true}
        loaderPosition={"center"}
      ></Button>
    );
  }

  return (
    <>
      {address ? (
        <Button
          onClick={disconnectWallet}
          radius={"md"}
          color="gray.6"
          bg={"#6b7280"}
        >
          {truncate(address)}
        </Button>
      ) : (
        <Button
          onClick={connectWallet}
          radius={"md"}
          color="gray.6"
          bg={"#6b7280"}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
