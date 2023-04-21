import React from 'react';
import { ReactComponent as Facebook } from '../../assets/svg/social-networks/facebook.svg';
import { ReactComponent as Youtube } from '../../assets/svg/social-networks/youtube.svg';
import { ReactComponent as Twitter } from '../../assets/svg/social-networks/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/svg/social-networks/insta.svg';
import { SocialMediaList, Link } from './FollowUs.styled';

export const FollowUs = () => {
    return (
        <div>
            <SocialMediaList>
                <li>      
                    <Link href="https://www.facebook.com/" >
                        <Facebook width="20" height="20"/>
                    </Link>

                </li>
                <li>
                    <Link href="https://www.youtube.com/">
                            <Youtube width="20" height="15"/>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.twitter.com/">
                            <Twitter width="20" height="16"/>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/">
                            <Instagram width="20" height="20"/>
                    </Link>
                </li>
            </SocialMediaList>
        </div>
    )
}
