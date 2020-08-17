
export const CATEGORIES = [
  'web-development',
  'javascript', 'angular', 'typescript', 'release-notes', 'software-development',
  'semantic-versioning', 'release-management', 'ionic-framework', 'ionic', 'surveys',
  'debugging', 'components', 'schematics', 'breaking-changes', 'frontend', 'materials',
  'accessibility', 'codelyzer', 'semanticweb', 'capacitor', 'hybrid-app-development',
  'conference', 'community'];
export interface Blog {
  title: string;
  pubDate: Date;
  link: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}
