import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';

import { Flex } from '../components/Grid';
import BrowseTopics from '../components/help-and-support/BrowseTopicSection';
import ContactForm from '../components/help-and-support/ContactSection';
import ContactUsSuccess from '../components/help-and-support/ContactUsSucess';
import HowCanWeHelp from '../components/help-and-support/HowCanWeHelpSection';
import HowOCWorks from '../components/help-and-support/HowOCWorksSection';
import NeedHelp from '../components/help-and-support/NeedHelpSection';
import WeAreHereIfYouWantToTalk from '../components/help-and-support/WeAreHereSection';
import Link from '../components/Link';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import StyledLink from '../components/StyledLink';

const menuItems = { pricing: true };

const messages = defineMessages({
  defaultTitle: {
    id: 'OC.helpAndSupport',
    defaultMessage: 'How can we help?',
  },
});

const renderFormContent = formConfirmation => {
  if (formConfirmation === 'success') {
    return <ContactUsSuccess />;
  }

  return (
    <React.Fragment>
      <HowCanWeHelp />
      <ContactForm />
      <WeAreHereIfYouWantToTalk />
      <NeedHelp
        title={
          <FormattedMessage id="helpAndSupport.waitForAnswer" defaultMessage="Don’t want to wait for an answer?" />
        }
        description={
          <FormattedMessage
            id="helpAndSupport.waitForAnser.description"
            defaultMessage="Visit our Documentation page to explore topics and find answers to your questions."
          />
        }
        actions={
          <Flex flexDirection={['column', 'row']}>
            <Link href="/help">
              <StyledButton minWidth={208} buttonStyle="standard" whiteSpace="nowrap">
                <FormattedMessage id="helpAndSupport.visitHelp" defaultMessage="Visit Help & Support" />
              </StyledButton>
            </Link>
            <StyledLink
              href="https://docs.opencollective.com/"
              buttonSize="medium"
              minWidth={208}
              buttonStyle="dark"
              mt={['16px', 0]}
              ml={[0, '16px']}
              openInNewTab
            >
              <FormattedMessage id="helpAndSupport.viewDocumentation" defaultMessage="View Documentation" />
            </StyledLink>
          </Flex>
        }
      />
    </React.Fragment>
  );
};

const HelpAndSupport = ({ action, formConfirmation }) => {
  const { formatMessage } = useIntl();

  return (
    <Page menuItems={menuItems} description={formatMessage(messages.defaultTitle)}>
      {action === 'contact' ? (
        renderFormContent(formConfirmation)
      ) : (
        <React.Fragment>
          <HowCanWeHelp />
          <BrowseTopics />
          <HowOCWorks />
          <WeAreHereIfYouWantToTalk />
        </React.Fragment>
      )}
    </Page>
  );
};

HelpAndSupport.propTypes = {
  action: PropTypes.string,
  formConfirmation: PropTypes.string,
};

HelpAndSupport.getInitialProps = async ctx => ({
  ...ctx.query,
});

export default HelpAndSupport;
