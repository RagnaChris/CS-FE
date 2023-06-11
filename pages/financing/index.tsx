import { Fragment } from "react";
import Head from "next/head";
import NextLink from "next/link";

import { Col, Grid } from "@tremor/react";
import ProjectCard from "@/components/pages/financing/project-card";
import ActiveProjectsButton from "@/components/buttons/active-projects-button";
import SortSelect from "@/components/pages/financing/sort-select";

export default function FinancingPage() {
  return (
    <>
      <Head>
        <title>Financing - Carbon Sarhat</title>
      </Head>
      <section className={"space-y-10"}>
        <div>
          <h1>Financing</h1>
          <h2>Featured Projects</h2>
        </div>
        <section>
          <Grid numColsSm={2} numColsMd={2} numColsLg={3} className={"mb-6"}>
            <Col numColSpan={1}>
              <ActiveProjectsButton />
            </Col>
          </Grid>

          <Grid
            numColsSm={2}
            numColsMd={2}
            numColsLg={3}
            className="gap-6 lg:gap-16"
          >
            {Array.from(Array(3).keys()).map((idx) => (
              <Fragment key={idx}>
                <NextLink href={`/financing/project/${idx}`}>
                  <ProjectCard />
                </NextLink>
              </Fragment>
            ))}
          </Grid>
        </section>
        <div className={"flex justify-between"}>
          <h2>Explore All Projects</h2>
          <SortSelect />
        </div>
        <Grid
          numColsSm={2}
          numColsMd={2}
          numColsLg={3}
          className="mt-6 gap-6 lg:gap-16"
        >
          {Array.from(Array(6).keys()).map((idx) => (
            <Fragment key={idx}>
              <NextLink href={`/financing/project/${idx}`}>
                <ProjectCard />
              </NextLink>
            </Fragment>
          ))}
        </Grid>
      </section>
    </>
  );
}
