
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  studentName: string;
  githubUrl?: string;
  liveUrl?: string;
  showActions?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ProjectCard = ({
  id,
  title,
  description,
  techStack,
  category,
  studentName,
  githubUrl,
  liveUrl,
  showActions = false,
  onEdit,
  onDelete
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden hover-scale">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {techStack.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{techStack.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          by <span className="font-medium text-violet-600">{studentName}</span>
        </div>
        
        <div className="flex gap-2 mb-4">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="text-xs">
                GitHub
              </Button>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="text-xs">
                Live Demo
              </Button>
            </a>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <Link to={`/project/${id}`}>
            <Button size="sm" className="bg-brand-gradient hover:opacity-90">
              View Details
            </Button>
          </Link>
          
          {showActions && (
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={onEdit}>
                Edit
              </Button>
              <Button variant="destructive" size="sm" onClick={onDelete}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
