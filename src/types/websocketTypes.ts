export type TWebsocketMessage = {
    channel: string;
    data: string;
    event: string;
}

export type TChatMessageEvent = {
    id: string;
    chatroom_id: number;
    content: string;
    type: EChatMessageEventType;
    created_at: Date;
    sender: {
        id: number;
        username: string;
        slug: string;
        identity: { color: string; badges: [TSubscriberBadge | TModeratorBadge] }
    }
}

export type TBanEvent = {
    id: string;
    user: TUser,
    banned_by: TUser,
    expires_at: Date
}

export type TUnBanEvent = {
    id: string;
    user: TUser,
    unbanned_by: TUser,
}

export type TMessageDelete = {
    id: string,
    message: { id: string }
}

export type TStreamStartEvent =
    {
        livestream: {
            id: number,
            channel_id: number,
            session_title: string,
            source: null | string,
            created_at: string
        }
    }

export type TStopStreamEvent =
    {
        livestream: { id: number, channel: { id: number, is_banned: boolean } }
    }


export type TSubscribtionEvent =
    { chatroom_id: number, username: string, months: number }

export type TChannelSubscriptionEvent = {
    user_ids: number[],
    username: string,
    channel_id: number
}

export type TGiftedSubscriptionsEvent = {
    chatroom_id: number,
    gifted_usernames: string[],
    gifter_username: string
}


export type TLuckyUsersWhoGotGiftSubscriptionsEvent = {
    channel: TChannelUpdatedEvent['channel'],
    usernames: string[],
    gifter_username: string
}


export type TGiftsLeaderboardUpdatedEvent = {
    channel: TChannelUpdatedEvent['channel'],
    leaderboard:
    TSubscribtionGifter[],

    weekly_leaderboard: TSubscribtionGifter[],
    monthly_leaderboard: TSubscribtionGifter[],
    gifter_id: number,
    gifted_quantity: number
}

export type TChannelUpdatedEvent = {
    channel: {
        id: number,
        user_id: number,
        slug: string,
        is_banned: boolean,
        playback_url: string,
        name_updated_at: null,
        vod_enabled: boolean,
        subscription_enabled: boolean,
        can_host: boolean,
        chatroom: {
            id: number,
            chatable_type: string,
            channel_id: number,
            created_at: Date,
            updated_at: Date,
            chat_mode_old: string,
            chat_mode: string,
            slow_mode: boolean,
            chatable_id: number,
            followers_mode: boolean,
            subscribers_mode: boolean,
            emotes_mode: boolean,
            message_interval: number,
            following_min_duration: number
        }
    },
}

export type TChatroomUpdatedEvent = {
    id: number,
    slow_mode: { enabled: boolean, message_interval: number },
    subscribers_mode: { enabled: boolean },
    followers_mode: { enabled: boolean, min_duration: number },
    emotes_mode: { enabled: boolean },
    advanced_bot_protection: { enabled: boolean, remaining_time: number }
}

export type TStreamHostEvent = {
    chatroom_id: number,
    optional_message: string,
    number_viewers: number,
    host_username: string
}

export type TPinnedMessageCreatedEvent = {
    message: {
        chatroom_id: number,
        content: string,
        created_at: Date,
        id: string,
        sender: {
            id: number,
            username: string,
            slug: string,
            identity: [Object]
        },
        type: string,
    },
    duration: number
}
export type TSubscribtionGifter = {
    user_id: number, username: string, quantity: number
}

export type TSubscriberBadge = {
    type: string; text: string; count: number;
}

export type TModeratorBadge = {
    type: string; text: string; count?: number;
}

export enum EChatMessageEventType {
    message = 'message',
}

export type TUser = {
    id: number, username: string, slug: string
}