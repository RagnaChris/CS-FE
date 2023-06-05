import NextLink from "next/link";
import Image from "next/image";

import { Card, Grid, Subtitle, Title } from "@tremor/react";

export default function News() {
  return (
    <section>
      <div className={"mb-3 flex items-end gap-3"}>
        <h2>News</h2>
        <Subtitle>
          <NextLink href={"/blog"} className={"hover:underline"}>
            View all
          </NextLink>
        </Subtitle>
      </div>
      <Card>
        <Grid numColsSm={3} className="mx-auto gap-10">
          {Array.from(Array(3).keys()).map((idx) => (
            <div key={idx} className={"space-y-2"}>
              <Title className={"text-center text-base font-normal"}>
                Title of News
              </Title>
              <Image
                src={"/img/news.jpg"}
                alt={"news"}
                width={400}
                height={300}
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
