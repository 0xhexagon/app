import { communitySchema } from "./Community";
import { followSchema } from "./Follow";
import { likeSchema } from "./Like";
import { memberSchema } from "./Member";
import { postSchema } from "./Post";
import { replySchema } from "./Reply";
import { reportSchema } from "./Report";
import { repostSchema } from "./Repost";
import { userSchema } from "./User";

const Schema = `
	${userSchema}
	${communitySchema}
	${postSchema}
	${repostSchema}
	${replySchema}
	${followSchema}
	${memberSchema}
	${likeSchema}
	${reportSchema}
`

export default Schema
