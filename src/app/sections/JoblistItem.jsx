import Image from "next/image";
import PlaceholderImg from "@/assets/ngr.png";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import { relativeDate } from "@/lib/Date";
import { FormatCurrency } from "@/lib/currency";
import { Badge } from "@/components/badge/Badge";

const JoblistItem = ({ job }) => {
  return (
    <article className="ronded-lg flex cursor-pointer gap-3 border p-5 hover:bg-muted/60">
      <Image
        src={job.companyLogoUrl || PlaceholderImg}
        alt={`${job.companyName} logo`}
        priority
        width={100}
        height={100}
        className="h-20 w-24 self-center rounded-lg object-cover object-center"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="line-clamp-3 text-xl font-medium">{job.title}</h2>
          <p className="text-muted-foreground">{job.companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <JobsRelateInfo text={job.type} hide={true}>
            <Briefcase size={16} className="shrink-0" />
          </JobsRelateInfo>
          <JobsRelateInfo text={job.locationType}>
            <MapPin size={16} className="shrink-0" />
          </JobsRelateInfo>
          <JobsRelateInfo text={job.location || "Worldwide"}>
            <Globe2 size={16} className="shrink-0" />
          </JobsRelateInfo>
          <JobsRelateInfo text={FormatCurrency(job.salary)}>
            <Banknote size={16} className="shrink-0" />
          </JobsRelateInfo>
          <JobsRelateInfo text={relativeDate(job.createdAt)} hide={true}>
            <Clock size={16} className="shrink-0 " />
          </JobsRelateInfo>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{job.type}</Badge>
        <JobsRelateInfo text={relativeDate(job.createdAt)}>
          <Clock size={16} className="shrink-0 " />
        </JobsRelateInfo>
      </div>
    </article>
  );
};

export default JoblistItem;

const JobsRelateInfo = ({ text, hide = false, children }) => {
  if (!text) return;
  return (
    <div
      className={`flex gap-1.5 ${hide && "sm:hidden"} text-muted-foreground`}
    >
      <div className="ngr-mbs-4px">{children}</div>
      <p className="line-clamp-3">{text}</p>
    </div>
  );
};
