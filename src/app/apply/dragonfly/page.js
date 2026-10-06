import Submission from '@/components/Submission';
import { application } from '@/content/applications/dragonfly';
import { site } from '@/content/site';

export const metadata = {
  title: `${site.name}, submission to ${application.venue}`,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Submission application={application} />;
}
