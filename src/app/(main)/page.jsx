import Prisma from "@/lib/prisma";
import JoblistItem from "../sections/JoblistItem";
export default async function HomePage() {
  const jobs = await Prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 py-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer jobs
        </h1>
        <p className="text-muted-foreground">Find your Dream Job</p>
      </div>
      <section>
        <div className="space-y-4">
          {!!jobs?.length ? (
            jobs.map((job) => <JoblistItem key={job.id} job={job} />)
          ) : (
            <article>no jobs available </article>
          )}
        </div>
      </section>
    </main>
  );
}
