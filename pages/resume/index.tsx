import { Button, Chip } from "@heroui/react";
import { resume } from "../../data/resume";

function groupedExperience() {
  const groups: {
    company: string;
    location: string;
    roles: (typeof resume.experience)[number][];
  }[] = [];

  for (const job of resume.experience) {
    const last = groups[groups.length - 1];
    if (last && last.company === job.company) {
      last.roles.push(job);
    } else {
      groups.push({
        company: job.company,
        location: job.location,
        roles: [job],
      });
    }
  }

  return groups;
}

export default function Resume() {
  const companies = groupedExperience();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:px-8 md:py-16">
      <header className="flex items-center justify-between gap-4 mb-16">
        <h1 className="font-bold text-4xl">Resume</h1>
        <Button
          as="a"
          href={resume.pdfHref}
          download
          color="primary"
          variant="bordered"
          radius="md"
        >
          Download PDF
        </Button>
      </header>

      <section className="mb-16">
        <h2 className="font-bold text-sm text-primary uppercase tracking-wide mb-6">
          Experience
        </h2>
        <div className="flex flex-col gap-12 border-l-2 border-primary/25 pl-6 md:pl-8">
          {companies.map((company) => (
            <article key={company.company}>
              <h3 className="font-bold text-2xl mb-6">{company.company}</h3>
              <div className="flex flex-col gap-8">
                {company.roles.map((role) => (
                  <div key={role.title}>
                    <h4 className="font-semibold text-xl">{role.title}</h4>
                    <p className="text-default-500 mb-4">
                      {company.location} · {role.dates}
                    </p>
                    <ul className="space-y-3 text-lg leading-relaxed">
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-bold text-sm text-primary uppercase tracking-wide mb-6">
          Skills
        </h2>
        <div className="flex flex-col gap-6">
          {resume.skills.map((group) => (
            <div key={group.label}>
              <h3 className="text-default-500 mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item} size="md" variant="flat" color="primary">
                    {item}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-bold text-sm text-primary uppercase tracking-wide mb-6">
          Education
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          <p className="font-bold text-2xl">{resume.education.school}</p>
          <p className="text-default-500 shrink-0">{resume.education.dates}</p>
        </div>
        <p className="text-xl mt-2">{resume.education.degree}</p>
        <p className="text-default-500 mt-1">{resume.education.college}</p>
        <p className="text-default-500 mt-3">
          {resume.education.highlights.join(", ")}
        </p>
      </section>

      <section>
        <h2 className="font-bold text-sm text-primary uppercase tracking-wide mb-6">
          Outside of work
        </h2>
        <p className="text-lg text-default-600 leading-relaxed">
          {`${resume.interests.slice(0, -1).join(", ")}, and ${
            resume.interests[resume.interests.length - 1]
          }.`}
        </p>
      </section>
    </div>
  );
}
