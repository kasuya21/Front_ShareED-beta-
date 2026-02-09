import { FiEye, FiHeart, FiMessageCircle } from 'react-icons/fi';

const PostCard = ({ post }) => {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            {/* Image - 16:9 aspect ratio */}
            <figure className="aspect-video">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body p-4">
                {/* Stats Bar */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1 hover:text-purple-600 transition-colors cursor-pointer">
                        <FiEye className="text-gray-500 hover:text-purple-600 transition-colors" />
                        <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                        <FiHeart className="text-gray-500 hover:text-red-500 transition-colors" />
                        <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                        <FiMessageCircle className="text-gray-500 hover:text-blue-500 transition-colors" />
                        <span>{post.comments}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="card-title text-lg font-bold text-gray-800">{post.title}</h3>

                {/* Subtitle */}
                {post.subtitle && (
                    <p className="text-sm text-gray-600 mb-3">{post.subtitle}</p>
                )}

                {/* Tags */}
                <div className="flex gap-2 mb-3 flex-wrap">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-primary badge-sm hover:badge-secondary transition-colors cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer: User Info */}
                <div className="flex items-center gap-2 mt-2">
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img
                                src={post.userAvatar}
                                alt={post.userName}
                            />
                        </div>
                    </div>
                    <div className="text-sm">
                        <p className="font-medium text-gray-700">{post.userName}</p>
                        <p className="text-gray-500 text-xs">{post.homeName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
