import { FC } from "react";
import { motion, usePresence, Variants } from "framer-motion";
import styled from "styled-components";
import { COLORS } from "../../style";
import { Job } from "../../types";
import { Badge } from "../Badge/Badge";
import { DetailsList } from "../DetailsList/DetailsList";
import { Tag } from "../Tag/Tag";
import { Typography } from "../Typography/Typography";
import { useFiltersContext } from "../../contexts/FilterContext";

const StyledContainer = styled(motion.li)<{ featured: boolean }>`
  padding: 30px;
  box-shadow: 5px 5px 25px 9px rgba(0, 0, 0, 0.15);
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  position: relative;
  border-radius: 5px;
  border-left: ${({ featured }) =>
    featured
      ? `4px solid ${COLORS.desaturatedDarkCyan}`
      : `4px solid transparent`};
`;

const StyledCompanyName = styled(Typography)`
  color: ${COLORS.desaturatedDarkCyan};
  font-size: 1.3rem;
`;

const StyledTagsContainer = styled.div`
  display: flex;
  * + * {
    margin-left: 20px;
  }
`;

const StyledPosition = styled(Typography)`
  color: ${COLORS.veryDarkGrayishCyan};
  font-weight: bold;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 25px;
  }
`;

const liVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
  out: {
    opacity: 0.3,
    scale: 0.98,
    y: -20,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
};

interface JobListItemProps {
  job: Job;
  index: number;
}

export const JobListItem: FC<JobListItemProps> = ({ job, index }) => {
  const {
    position,
    featured,
    new: newOffer,
    company,
    logo,
    location,
    postedAt,
    contract,
    tools,
    languages,
    role,
    level,
  } = job;

  const { addFilter } = useFiltersContext();

  const [isPresent, safeToRemove] = usePresence();

  return (
    <StyledContainer
      featured={featured}
      layout
      variants={liVariants}
      initial="hidden"
      animate="visible"
      exit="out"
      transition={{
        delay: index * 0.15,
        type: "just",
      }}
      onAnimationComplete={() => !isPresent && safeToRemove()}
    >
      <DetailsContainer>
        <img src={logo} alt={company} />
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <StyledCompanyName as="h2">{company}</StyledCompanyName>
            {newOffer && <Badge variant="desaturatedDarkCyan">new!</Badge>}
            {featured && <Badge variant="veryDarkGrayishCyan">featured</Badge>}
          </div>
          <StyledPosition as="p">{position}</StyledPosition>
          <DetailsList data={[postedAt, contract, location]} />
        </div>
      </DetailsContainer>
      <StyledTagsContainer>
        {[role, level, ...languages, ...tools].map((tool) => (
          <Tag key={tool} onClick={() => addFilter(tool)}>
            {tool}
          </Tag>
        ))}
      </StyledTagsContainer>
    </StyledContainer>
  );
};
