import { useState } from "react";

import { Button, NumberInput, Popover } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";

export default function AdvancedOptions() {
  const [opened, setOpened] = useState(false);
  const [slippage, setSlippage] = useState<number | "">(0);

  return (
    <div>
      <Popover
        opened={opened}
        onChange={setOpened}
        width={150}
        position="bottom"
        withArrow
        shadow="md"
      >
        <Popover.Target>
          <button onClick={() => setOpened((o) => !o)} className={"flex"}>
            <IconSettings
              className={"text-gray-300 transition hover:text-gray-100"}
            />
          </button>
        </Popover.Target>
        <Popover.Dropdown>
          <NumberInput
            value={slippage}
            onChange={setSlippage}
            label={"Slippage"}
            rightSection={<div className={"text-sm font-bold"}>%</div>}
            radius={"md"}
            placeholder={"0"}
            data-autofocus={true}
          />
          <Button
            onClick={() => setOpened(false)}
            variant="default"
            compact
            fullWidth={true}
            className={"mt-3"}
          >
            Confirm
          </Button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}
