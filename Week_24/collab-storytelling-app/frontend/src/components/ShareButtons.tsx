import { TwitterShareButton, FacebookShareButton, TwitterIcon, FacebookIcon } from "react-share";

interface ShareButtonsProps {
    storyId: number;
    title: string;
}

export default function ShareButtons({ storyId, title }: ShareButtonsProps) {
    // build the shareable URL
    const shareUrl = `${window.location.origin}/stories/${storyId}`;
    const shareTitle = `Check out this story: ${title}`;

    return (
        <div className="flex gap-2 items-center">
            <span className="text-sm text-base-content/60">
                Share
            </span>

            <TwitterShareButton url={shareUrl} title={shareTitle} hashtags={['storytelling', 'collaboration']}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            <FacebookShareButton url={shareUrl} hashtag="#storytelling">
                <FacebookIcon size={32} round/>
            </FacebookShareButton>

            <button onClick={() => { navigator.clipboard.writeText(shareUrl); alert('Link copied to clipboard!'); }} title="Copy link" className="btn btn-circle btn-sm btn-ghost">
                Copy Link 
            </button>
        </div>
    );
}