export const connectSlackOAuth = async ({ userEmail, assistantName }) => {
    try {
        const slackOAuthURL = `https://www.branchify.site/api/oauth/slack/connect?userEmail=${encodeURIComponent(
            userEmail
        )}&assistantName=${encodeURIComponent(assistantName)}`;

        const popup = window.open(
            slackOAuthURL,
            'Slack OAuth',
            'width=600,height=700,top=100,left=500'
        );

        if (!popup) {
            alert('팝업 차단을 해제하고 다시 시도해주세요.');
            return;
        }

        const checkPopupClosed = setInterval(() => {
            if (popup.closed) {
                clearInterval(checkPopupClosed);
                window.dispatchEvent(new Event('slackAuthComplete'));
            }
        }, 500);
    } catch (error) {}
};
