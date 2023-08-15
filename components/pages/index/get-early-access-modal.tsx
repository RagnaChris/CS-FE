import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import GetEarlyAccessForm from "@/components/pages/index/get-early-access-form";
import type { Dispatch, SetStateAction } from "react";

export default function GetEarlyAccessModal({
  opened,
  close,
  setOpenModal,
}: {
  opened: boolean;
  close: () => void;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          close();
          setOpenModal(false);
        }}
        size={"sm"}
        centered
        transitionProps={{
          transition: "pop",
          duration: 100,
          timingFunction: "linear",
        }}
        overlayProps={{
          opacity: 0.5,
          blur: 3,
        }}
        styles={{
          header: {
            paddingBottom: 0,
            backgroundColor: "transparent",
            color: "white",
          },
          content: {
            borderRadius: "0.75rem",
            background:
              "linear-gradient(332deg,rgba(93, 95, 104, 1)0%,rgba(67, 84, 130, 1) 100%)",
          },
          close: {
            color: "white",
            "&:hover": { backgroundColor: "transparent" },
          },
        }}
      >
        <GetEarlyAccessForm />
      </Modal>
    </>
  );
}
