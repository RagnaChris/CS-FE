import { useEffect, useState } from "react";
import NextLink from "next/link";

import { Button, NumberInput } from "@mantine/core";
import { Card } from "@tremor/react";
import { IconArrowDown } from "@tabler/icons-react";
import AdvancedOptions from "@/components/pages/exchange/token-swap/advanced-options";

export default function TokenSwap() {
  const [usdcValue, setUsdcValue] = useState<number | "">("");
  const [tokenValue, setTokenValue] = useState<number | "">("");
  const [usdcLabel, setUsdcLabel] = useState(true);

  useEffect(() => {
    if (usdcValue) {
      setTokenValue(usdcValue * 3);
    } else {
      setTokenValue("");
      setUsdcValue("");
    }
  }, [usdcValue]);

  useEffect(() => {
    if (tokenValue) {
      setUsdcValue(tokenValue / 3);
    } else {
      setUsdcValue("");
      setTokenValue("");
    }
  }, [tokenValue]);

  return (
    <Card className={"space-y-7 rounded-tl-none border border-gray-700 ring-0"}>
      <div className={"flex items-end justify-between"}>
        <h2>Swap</h2>
        <AdvancedOptions />
      </div>
      <div className={"relative"}>
        <NumberInput
          value={usdcValue}
          onChange={setUsdcValue}
          precision={2}
          size={"xl"}
          hideControls
          rightSection={
            <div className={"text-sm font-bold"}>
              {usdcLabel ? "USDC" : "CASA"}
            </div>
          }
          rightSectionWidth={0}
          radius={"md"}
          placeholder={"0"}
        />
        <div className={"my-1 flex justify-center"}>
          <button className={"z-10"}>
            <IconArrowDown className={"h-7 w-7"} />
          </button>
        </div>
        <NumberInput
          value={tokenValue}
          onChange={setTokenValue}
          precision={2}
          size={"xl"}
          hideControls
          rightSection={
            <div className={"text-sm font-bold"}>
              {usdcLabel ? "CASA" : "USDC"}
            </div>
          }
          rightSectionWidth={0}
          radius={"md"}
          placeholder={"0"}
        />
      </div>
      <div className={"flex flex-col justify-center gap-3"}>
        <Button radius={"md"} color="gray.6" bg={"#6b7280"}>
          Connect Wallet
        </Button>
        <div className={"text-center"}>
          <small>
            <NextLink href={"#"} className={"hover:underline"}>
              Terms of Service
            </NextLink>
          </small>
        </div>
      </div>
    </Card>
  );
}
