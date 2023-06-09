import { Flex } from "@tremor/react";
import { IconMapPin } from "@tabler/icons-react";

export default function Info() {
  return (
    <>
      <div className={"text-center"}>
        <h2>Application Status</h2>
        <p>Process of verification listing of the project</p>
      </div>
      <Flex className={"justify-center gap-10"}>
        <Pin name={"Declined"} color={"bg-red-500"} />
        <Pin name={"Live"} color={"bg-yellow-400"} />
        <Pin name={"Finished"} color={"bg-emerald-500"} />
      </Flex>
    </>
  );
}

function Pin({ name, color }: { name: string; color: string }) {
  return (
    <div className={"flex flex-col items-center gap-1"}>
      <IconMapPin className={`h-7 w-7 rounded-full p-1 text-black ${color}`} />
      <span className={"text-sm"}>{name}</span>
    </div>
  );
}
