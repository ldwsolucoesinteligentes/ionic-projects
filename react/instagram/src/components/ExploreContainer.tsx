import { Post } from "../models/Post";
import "./ExploreContainer.css";

interface ContainerProps {
  posts: Post[];
}

const ExploreContainer: React.FC<ContainerProps> = ({
  posts,
}: {
  posts: Post[];
}) => {
  return (
    <div className="container">
      <ul>
        {posts.map((p, i) => (
          <li key={i}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreContainer;
