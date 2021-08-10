import React from 'react'
import '../App.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Twitter() {
    return(
        <div className='Twitter'>
            <TwitterTimelineEmbed
            sourceType='Profile'
            screenName='TwitterOSS'
            options={{height: 480, width: 320}} />
        </div>
    );
}

export default Twitter