import React from 'react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';

import { Box, Flex, Grid } from '../Grid';
import NextIllustration from '../home/HomeNextIllustration';
import Link from '../Link';
import StyledButton from '../StyledButton';
import StyledCard from '../StyledCard';
import StyledLink from '../StyledLink';
import { H3, P } from '../Text';

import NeedHelp from './NeedHelpSection';

const topics = [
  {
    iconSrc: '/static/images/help-and-support/collectiveProfile-icon.png',
    id: 'collectiveProfiles',
    link: 'https://docs.opencollective.com/help/collectives/collectives',
  },
  {
    iconSrc: '/static/images/help-and-support/fiscalHosts-icon.png',
    id: 'fiscalHosts',
    link: 'https://docs.opencollective.com/help/fiscal-hosts/fiscal-hosts',
  },
  {
    iconSrc: '/static/images/help-and-support/contributions-icon.png',
    id: 'contributions',
    link: 'https://docs.opencollective.com/help/financial-contributors/financial-contributors',
  },
  {
    iconSrc: '/static/images/help-and-support/expenses-icon.png',
    id: 'expenses',
    link: 'https://docs.opencollective.com/help/expenses-and-getting-paid/expenses',
  },
  {
    iconSrc: '/static/images/help-and-support/projects-icon.png',
    id: 'projects',
    link: 'https://docs.opencollective.com/help/collectives/projects',
  },
  {
    iconSrc: '/static/images/help-and-support/security-icon.png',
    id: 'security',
    link: 'https://docs.opencollective.com/help/product/security',
  },
];

const messages = defineMessages({
  collectiveProfiles: {
    id: 'helpAndSupport.collectiveProfiles',
    defaultMessage: 'Collective Profiles',
  },
  fiscalHosts: {
    id: 'helpAndSupport.fiscalHosts',
    defaultMessage: 'Fiscal Hosts',
  },
  contributions: {
    id: 'Contributions',
    defaultMessage: 'Contributions',
  },
  expenses: {
    id: 'Expenses',
    defaultMessage: 'Expenses',
  },
  projects: {
    id: 'Projects',
    defaultMessage: 'Projects',
  },
  security: {
    id: 'Security',
    defaultMessage: 'Security',
  },
});

const BrowseTopics = () => {
  const { formatMessage } = useIntl();
  return (
    <React.Fragment>
      <Flex flexDirection="column" px="16px" alignItems="center" my="120px">
        <Flex
          width={[null, '568px', '864px', null, '1020px']}
          alignItems="center"
          mb={['24px', '48px']}
          justifyContent="space-between"
        >
          <Box>
            <H3
              fontSize={['32px']}
              lineHeight={['40px']}
              letterSpacing={['-0.008em']}
              color="black.900"
              textAlign="center"
            >
              <FormattedMessage id="helpAndSupport.browseTopics" defaultMessage="Browse Topics" />
            </H3>
          </Box>
          <Box display={['none', 'inline-block']}>
            <Link href="/">
              <StyledButton minWidth={110} buttonStyle="dark" whiteSpace="nowrap">
                <FormattedMessage id="helpAndSupport.viewAll" defaultMessage="View All" />
              </StyledButton>
            </Link>
          </Box>
        </Flex>
        <Grid
          justifyContent="center"
          alignItems="center"
          width={['100%', '568px', '864px', null, null, '1020px']}
          gridTemplateColumns={[null, 'repeat(2, 288px)', 'repeat(3, 272px)', null, `repeat(3, 320px)`]}
          gridGap={['30px', null, '24px']}
        >
          {topics.map(({ id, iconSrc, link }) => (
            <StyledLink key={id} href={link} openInNewTab>
              <StyledCard
                width={['288px', null, '272px', null, '320px']}
                padding="24px"
                borderRadius="16px"
                boxShadow="0px 8px 20px rgba(41, 41, 42, 0.07)"
                borderWidth="0"
              >
                <P
                  fontSize="24px"
                  fontWeight="500"
                  lineHeight="32px"
                  letterSpacing="-0.008em"
                  color="black.900"
                  mb="24px"
                >
                  {formatMessage(messages[id])}
                </P>
                <Box>
                  <NextIllustration width={64} height={64} src={iconSrc} alt={`${id} illustration`} />
                </Box>
              </StyledCard>
            </StyledLink>
          ))}
        </Grid>
        <Box mt="24px" display={[null, 'none']}>
          <Link href="/">
            <StyledButton minWidth={288} my={[2, null, 0]} mr={[0, 3]} buttonStyle="dark" whiteSpace="nowrap">
              <FormattedMessage id="helpAndSupport.viewAll" defaultMessage="View All" />
            </StyledButton>
          </Link>
        </Box>
      </Flex>

      <NeedHelp
        title={
          <FormattedMessage
            id="helpAndSupport.contactDescription"
            defaultMessage="Couldn’t find what you were looking for?"
          />
        }
        actions={
          <Link href="/contact">
            <StyledButton minWidth={134} buttonStyle="dark" whiteSpace="nowrap">
              <FormattedMessage id="contactUs" defaultMessage="Contact us" />
            </StyledButton>
          </Link>
        }
      />
    </React.Fragment>
  );
};

export default BrowseTopics;
