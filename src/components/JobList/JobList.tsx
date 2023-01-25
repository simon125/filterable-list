import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { jobs as data } from "../../data";
import { Job } from "../../types";
import { JobListItem } from "../JobListItem/JobListItem";
import { useFiltersContext } from "../../contexts/FilterContext";

const StyledJobList = styled.ul`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 70px auto;
  padding: 0;
  /* @media screen and (min-width: ) */

  li + li {
    margin-top: 20px;
  }
`;

const isFilterMatch = (job: Job, filters: string[]) => {
  const { role, level, languages, tools } = job;
  const tags = [role, level, ...languages, ...tools];

  return filters.every((filter) => tags.includes(filter));
};

export const JobList: FC = () => {
  const { filters } = useFiltersContext();
  const jobs: Job[] = data;
  const jobsToDisplay =
    filters.length === 0
      ? jobs
      : jobs.filter((job) => isFilterMatch(job, filters));

  return (
    <StyledJobList>
      <AnimatePresence>
        {jobsToDisplay.map((job, index) => (
          <JobListItem job={job} key={job.id} index={index} />
        ))}
      </AnimatePresence>
    </StyledJobList>
  );
};
