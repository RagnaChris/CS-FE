import { Fragment, type ReactElement } from "react";
import Head from "next/head";
import NextLink from "next/link";

import Layout from "@/components/pages/dashboard/layout";

import { Col, Grid } from "@tremor/react";
import ProjectCard from "@/components/pages/dashboard/financing/project-card";
import ActiveProjectsButton from "@/components/pages/dashboard/buttons/active-projects-button";
import SortSelect from "@/components/pages/dashboard/financing/sort-select";

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
          <Grid numItemsSm={2} numItemsMd={2} numItemsLg={3} className={"mb-6"}>
            <Col numColSpan={1}>
              <ActiveProjectsButton />
            </Col>
          </Grid>

          <Grid
            numItemsSm={2}
            numItemsMd={2}
            numItemsLg={3}
            className="gap-6 lg:gap-16"
          >
            {Array.from(Array(3).keys()).map((idx) => (
              <Fragment key={idx}>
                <NextLink href={`/dashboard/financing/project/${idx}`}>
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
          numItemsSm={2}
          numItemsMd={2}
          numItemsLg={3}
          className="mt-6 gap-6 lg:gap-16"
        >
          {Array.from(Array(6).keys()).map((idx) => (
            <Fragment key={idx}>
              <NextLink href={`/dashboard/financing/project/${idx}`}>
                <ProjectCard />
              </NextLink>
            </Fragment>
          ))}
        </Grid>
      </section>
    </>
  );
}

FinancingPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
