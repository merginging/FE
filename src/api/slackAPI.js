export const connectSlackOAuth = ({ userEmail, assistantName }) => {
    const oauthUrl = `https://www.branchify.site/api/oauth/slack/connect?userEmail=${encodeURIComponent(
        userEmail
    )}&assistantName=${encodeURIComponent(assistantName)}`;

    window.location.href = oauthUrl;
};
