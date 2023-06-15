import NextLink from "next/link";
import Image from "next/image";

import { Card, Grid, Subtitle, Title } from "@tremor/react";

export default function News() {
  return (
    <section>
      <div className={"mb-3 flex items-center gap-3"}>
        <Title>News</Title>
        <Subtitle>
          <NextLink href={"/blog"} className={"hover:underline"}>
            View all
          </NextLink>
        </Subtitle>
      </div>
      <Card>
        <Grid numItemsSm={3} className="mx-auto gap-10">
          {Array.from(Array(3).keys()).map((idx) => (
            <div key={idx} className={"space-y-2"}>
              <h3 className={"text-center"}>Title of News</h3>
              <Image
                src={"/img/news.jpg"}
                alt={"news"}
                width={540}
                height={360}
                className={"h-auto w-full rounded-md"}
                priority={true}
              />
            </div>
          ))}
        </Grid>
      </Card>
    </section>
  );
}
