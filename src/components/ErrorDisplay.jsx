import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Admonition from '@theme/Admonition';
import IntegrationTypeErrorsAdmonition from '@site/versioned_docs/version-2/reusables/integration-type-errors-admonition.mdx'

const ErrorDisplay = ({ message, description, additionalInputs, riskSignals, inputAttemptsExceeded, integrationType, whenThisIsReturned, howToHandle, youShouldNeverGetThisError, children: code, sx }) => {
    const markdownMessage = `\`"${message}"\``;
    const tableRowMessage = message ? <tr><th><Markdown>`messsage`</Markdown></th><td><Markdown>{markdownMessage}</Markdown></td></tr> : null;
    const markdownDescription = description ? `> ${description}` : null;
    const markdownAdditionalInputs = additionalInputs ? `\`${additionalInputs}\`` : null;
    const tableRowAdditionalInputs = additionalInputs ? <tr><th><Markdown>`data.additionalInputs`</Markdown></th><td><Markdown>{markdownAdditionalInputs}</Markdown></td></tr> : null;
    const tableRowRiskSignals = riskSignals ? <tr><th><Markdown>`data.riskSignals`</Markdown></th><td><Markdown>[`RiskSignals`](./types#risksignals)</Markdown></td></tr> : null;
    const markdownInputAttemptsExceeded = inputAttemptsExceeded ? `\`${inputAttemptsExceeded}\`` : null;
    const tableRowMarkdownInputAttemptsExceeded = inputAttemptsExceeded ? <tr><th><Markdown>`data.inputAttemptsExceeded`</Markdown></th><td><Markdown>{markdownInputAttemptsExceeded}</Markdown></td></tr> : null;
    const integrationTypeAdmonition = integrationType ? <IntegrationTypeErrorsAdmonition option={integrationType}/> : null;
    const whenThisIsReturnedAdmonition = whenThisIsReturned ? <Admonition type="info" title="When This Is Returned">{whenThisIsReturned}</Admonition> : null;
    const howToHandleAdmonition = howToHandle ? <Admonition type="tip" title="How to Handle">{howToHandle}</Admonition> : null;
    const youShouldNeverGetThisErrorAdmonition = youShouldNeverGetThisError ? <Admonition type="warning" title="You Should Never Get This Error">{youShouldNeverGetThisError}</Admonition> : null;

    return (
        <Box sx={{ pt: 2, ...sx }}>  

            {/* Had to send the header through the children due to Docussurus limitation in having React generated headers */}
            {code}
            {markdownDescription && <Markdown>{markdownDescription}</Markdown>}
            <table className="error-table">
                <tbody>
                    {tableRowMessage}
                    {tableRowAdditionalInputs}
                    {tableRowMarkdownInputAttemptsExceeded}
                    {tableRowRiskSignals}
                </tbody>
            </table>

            {integrationTypeAdmonition}

            {whenThisIsReturnedAdmonition}

            {howToHandleAdmonition}
            
            {youShouldNeverGetThisErrorAdmonition}

        </Box>
    )
};

ErrorDisplay.propTypes = {
    message: PropTypes.string.isRequired,
    description: PropTypes.string,
    howToHandle: PropTypes.string,
    children: PropTypes.node,
    sx: PropTypes.object
};

export default ErrorDisplay;