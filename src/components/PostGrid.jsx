import PostCard from './PostCard';

const PostGrid = ({ title, posts }) => {
    return (
        <div className="px-4 py-6">
            {/* Section Title with Purple Underline */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 inline-block border-b-4 border-primary pb-1">
                    {title}
                </h2>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostGrid;
