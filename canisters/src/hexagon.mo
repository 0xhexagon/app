import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Random "mo:base/Random";

actor Hexagon {
	type Post = {
		author : Principal;
		createdAt : Int;
		body : Text;
	};

	type User = {
		name : Text;
		username : Text;
	};

	stable var postsId: Nat32 = 0;


	// var posts : HashMap(Principal, Post) = HashMap();
	let posts = HashMap.HashMap<Text, Post>(0, Text.equal, Text.hash);
	let users = HashMap.HashMap<Principal, User>(0, Principal.equal, Principal.hash);

	private func generatePostId() : Text {
		postsId += 1;
		return Nat32.toText(postsId);
	};

	public shared (msg) func createPost(author : Text, body : Text) : async ?Post {
		let postId = generatePostId();
		let post : Post = {
			id = postId;
			author = msg.caller;
			createdAt = Time.now();
			body = body;
		};
		posts.put(postId, post);
		posts.get(postId);
	};

	public shared func readPost(postId : Text) : async ?Post {
		return posts.get(postId);
	};

	public query func readPosts() : async [(Text, Post)] {
		let postIter : Iter.Iter<(Text, Post)> = posts.entries();
		let postArray : [(Text, Post)] = Iter.toArray(postIter);

		return postArray;
	};

	public shared func deletePost(postId : Text) : async () {
		posts.delete(postId);
	};

	public shared (msg) func createUser(name : Text, username : Text) : async ?User {
		Debug.print("createUser called");
		let user : User = {
			name = name;
			username = username;
		};
		users.put(msg.caller, user);
		return users.get(msg.caller);
	};

	public shared(msg) func readUser() : async ?User {
		Debug.print("readUser called");
		return users.get(msg.caller);
	};

};
