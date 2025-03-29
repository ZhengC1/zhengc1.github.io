import { d as attr, p as push, f as ensure_array_like, h as head, i as attr_style, e as escape_html, j as bind_props, c as pop, k as stringify } from './index-CPJo5UQb.js';
import { S as Snow } from './Snow-BBjVrC37.js';
import { h as fallback } from './utils-B3WPzOwK.js';

const profile = "/_app/immutable/assets/profile.CqEYLqoh.jpg";
function Resume($$payload, $$props) {
  push();
  let name = fallback($$props["name"], "Chun Zheng");
  let email = fallback($$props["email"], "Zhengc42@gmail.com");
  let phone = fallback($$props["phone"], "984-888-4044");
  let experience = fallback(
    $$props["experience"],
    () => [
      {
        title: "Senior Software Engineer",
        company: "Sonic Automotive",
        location: "Remote",
        startDate: "Sept 2024",
        endDate: "Current",
        jobType: "Contract",
        achievements: [
          "Mentor team members towards technical excellence and career advancement.",
          "Worked on Sonics auto appraisal platforms in Python C# backend with an Angular frontend"
        ]
      },
      {
        title: "Senior Software Engineer",
        company: "Capital One",
        location: "McLean, VA",
        startDate: "May 2022",
        endDate: "Sept 2024",
        jobType: "Full Time",
        achievements: [
          "Using Docker with AWS Glue and AWS Step Functions with Lambda, created a new workflow to replace a deprecated legacy system reducing downtime and operating costs",
          "Standardized practices and code across teams by writing new tooling to increase team velocity with Python and Capital One’s in house Terraform wrapper",
          "Managed Agile ceremonies including retrospectives, ticket creation and PI Planning"
        ]
      },
      {
        title: "Software Engineer II",
        company: "Ntrepid LLC",
        location: "Reston, VA",
        startDate: "Dec 2019",
        endDate: "May 2022",
        jobType: "Full Time",
        achievements: [
          "Set up and maintain the celery asynchronous task queue and the RabbitMQ message broker with ECS containers",
          "Create and maintain parts of infrastructure such as the Elastic Container Service cluster using Terraform, Jenkins, Ansible and Python 3.7.9",
          "Created a REST API using FastAPI, Swagger and SQLAlchemy so clients could schedule long running periodic, celery tasks"
        ]
      },
      {
        title: "Contractor",
        company: "Thompson Technology",
        location: "Atlanta, GA",
        startDate: "Apr 2019",
        endDate: "Dec 2019",
        jobType: "Contract",
        achievements: [
          " Developed code-generation tool to create skeleton structures for interacting with various AWS offerings using Cloudformation",
          " Mentor engineers during on-call rotations on how to build, execute and improve their deployment pipelines"
        ]
      },
      {
        title: "Software Engineer",
        company: "Oracle",
        location: "Durham, NC",
        startDate: "Nov 2016",
        endDate: "Apr 2019",
        jobType: "Full Time",
        achievements: [
          "Programmed Python and Java for internal Hadoop Automation Manager",
          "Added new features to internal MySQL management CLI written in Python 2",
          "Administered production and staging Zookeeper, Hbase, Hadoop and MySQL"
        ]
      }
    ],
    true
  );
  let education = fallback(
    $$props["education"],
    () => [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "Appalachian State University",
        year: "2016"
      }
    ],
    true
  );
  let skills = fallback(
    $$props["skills"],
    () => [
      "Python",
      "Java",
      "C#",
      "Angular",
      "Vim",
      "Git",
      "Vagrant",
      "Docker",
      "Jenkins",
      "docker-compose",
      "Ansible",
      "Terraform",
      "Selenium",
      "RabbitMQ",
      "Celery",
      "Flower",
      "FastAPI",
      "AWS ECS",
      "S3",
      "ES",
      "Lambda"
    ],
    true
  );
  let projects = fallback($$props["projects"], () => [], true);
  let certifications = fallback(
    $$props["certifications"],
    () => [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023"
      }
    ],
    true
  );
  let primaryColor = fallback($$props["primaryColor"], "#2c3e50");
  let accentColor = fallback($$props["accentColor"], "#3498db");
  const each_array = ensure_array_like(experience);
  const each_array_2 = ensure_array_like(skills);
  const each_array_5 = ensure_array_like(education);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(name)} - Resume</title>`;
    $$payload2.out += `<style class="svelte-9a3lav">
		@media print {
			body {
				-webkit-print-color-adjust: exact;
				print-color-adjust: exact;
			}

			.no-print {
				display: none !important;
			}

			.resume-container {
				padding: 0;
				margin: 0;
				box-shadow: none;
			}
		}
	</style>`;
  });
  $$payload.out += `<div class="min-h-screen bg-gray-50 px-8 py-8 print:bg-white print:p-0 svelte-9a3lav"><div class="resume-container mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-16 shadow-lg border border-gray-200 svelte-9a3lav"><h1 class="mb-2 text-4xl font-bold text-center svelte-9a3lav"${attr_style(`color: ${stringify(primaryColor)}`)}>${escape_html(name)}</h1> <div class="mb-4 flex flex-wrap justify-center gap-x-6 svelte-9a3lav"><p class="text-gray-700 svelte-9a3lav"><span class="font-medium svelte-9a3lav">Email:</span> ${escape_html(email)}</p> <p class="text-gray-700 svelte-9a3lav"><span class="font-medium svelte-9a3lav">Phone:</span> ${escape_html(phone)}</p></div> <div class="mb-6 h-1 w-full rounded-full svelte-9a3lav"${attr_style(`background-color: ${stringify(accentColor)}`)}></div> <section class="mb-6 svelte-9a3lav"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let job = each_array[$$index_1];
    const each_array_1 = ensure_array_like(job.achievements);
    $$payload.out += `<div class="mb-6 svelte-9a3lav"><div class="mb-2 flex items-start justify-between md:flex-row md:items-center svelte-9a3lav"><h4 class="text-lg font-bold svelte-9a3lav"${attr_style(`color: ${stringify(primaryColor)}`)}>${escape_html(job.title)}</h4> <p class="text-sm rounded-full bg-gray-200 px-2 py-1 font-small text-gray-600 svelte-9a3lav">${escape_html(job.jobType)}</p></div> <div class="flex justify-between svelte-9a3lav"><p class="text-sm text-gray-600 font-medium svelte-9a3lav">${escape_html(job.company)}</p> <p class="text-sm text-gray-600 svelte-9a3lav">${escape_html(job.startDate)} - ${escape_html(job.endDate)}</p></div> <ul class="flex flex-col list-disc list-outside pl-9 svelte-9a3lav"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let achievement = each_array_1[$$index];
      $$payload.out += `<li class="items-center text-sm text-gray-800 svelte-9a3lav">${escape_html(achievement)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div>`;
  }
  $$payload.out += `<!--]--></section> <section class="mb-8 svelte-9a3lav"><h3 class="mb-4 border-b pb-2 text-xl font-bold text-center svelte-9a3lav"${attr_style(`color: ${stringify(primaryColor)}; border-color: ${stringify(accentColor)}`)}>Skills</h3> <div class="flex flex-wrap svelte-9a3lav"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let skill = each_array_2[$$index_2];
    $$payload.out += `<span class="mr-2 mb-2 rounded px-3 py-1 text-sm font-medium svelte-9a3lav"${attr_style(`background-color: ${stringify(accentColor)}20; color: ${stringify(primaryColor)}`)}>${escape_html(skill)}</span>`;
  }
  $$payload.out += `<!--]--></div></section> `;
  if (projects && projects.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array_3 = ensure_array_like(projects);
    $$payload.out += `<section class="mb-8 svelte-9a3lav"><h3 class="mb-4 border-b pb-2 text-xl font-bold text-center svelte-9a3lav"${attr_style(`color: ${stringify(primaryColor)}; border-color: ${stringify(accentColor)}`)}>Projects</h3> <!--[-->`;
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let project = each_array_3[$$index_3];
      $$payload.out += `<div class="mb-4 svelte-9a3lav"><h4 class="text-lg font-bold svelte-9a3lav"${attr_style(`color: ${stringify(primaryColor)}`)}>${escape_html(project.name)}</h4> <p class="mb-2 text-gray-800 svelte-9a3lav">${escape_html(project.description)}</p> <p class="mb-1 svelte-9a3lav"><span class="font-medium svelte-9a3lav">Technologies:</span> ${escape_html(project.technologies.join(", "))}</p> `;
      if (project.link) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<p class="svelte-9a3lav"><span class="font-medium svelte-9a3lav">Link:</span> ${escape_html(project.link)}</p>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    }
    $$payload.out += `<!--]--></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (certifications && certifications.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array_4 = ensure_array_like(certifications);
    $$payload.out += `<section class="svelte-9a3lav"><h3 class="mb-4 border-b pb-2 text-xl font-bold text-center svelte-9a3lav"${attr_style(`color: ${stringify(primaryColor)}; border-color: ${stringify(accentColor)}`)}>Certifications</h3> <div class="flex flex-col flex-wrap md:flex-row svelte-9a3lav"><!--[-->`;
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let cert = each_array_4[$$index_4];
      $$payload.out += `<div class="mr-6 mb-4 svelte-9a3lav"><p class="font-bold svelte-9a3lav"${attr_style(`color: ${stringify(primaryColor)}`)}>${escape_html(cert.name)}</p> <p class="text-gray-600 svelte-9a3lav">${escape_html(cert.issuer)} · ${escape_html(cert.date)}</p></div>`;
    }
    $$payload.out += `<!--]--></div></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <section class="mb-8 svelte-9a3lav"><h3 class="border-b pb-2 text-xl font-bold text-center svelte-9a3lav"${attr_style(`color: ${stringify(primaryColor)}; border-color: ${stringify(accentColor)}`)}>Education</h3> <!--[-->`;
  for (let $$index_6 = 0, $$length = each_array_5.length; $$index_6 < $$length; $$index_6++) {
    let edu = each_array_5[$$index_6];
    $$payload.out += `<div class="mb-6 svelte-9a3lav"><div class="mb-2 flex flex-col items-start justify-between md:flex-row md:items-center svelte-9a3lav"><h4 class="text-lg font-bold svelte-9a3lav"${attr_style(`color: ${stringify(primaryColor)}`)}>${escape_html(edu.degree)}</h4> <h4 class="mb-2 text-gray-600 svelte-9a3lav">${escape_html(edu.institution)}
							${escape_html(edu.year)}</h4></div> `;
    if (edu.achievements && edu.achievements.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array_6 = ensure_array_like(edu.achievements);
      $$payload.out += `<ul class="list-disc pl-5 svelte-9a3lav"><!--[-->`;
      for (let $$index_5 = 0, $$length2 = each_array_6.length; $$index_5 < $$length2; $$index_5++) {
        let achievement = each_array_6[$$index_5];
        $$payload.out += `<li class="mb-1 text-gray-> 800 svelte-9a3lav">${escape_html(achievement)}</li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></section></div></div>`;
  bind_props($$props, {
    name,
    email,
    phone,
    experience,
    education,
    skills,
    projects,
    certifications,
    primaryColor,
    accentColor
  });
  pop();
}
function _page($$payload) {
  Snow($$payload);
  $$payload.out += `<!----> <div class="flex items-center justify-center h-screen w-full"><div class="w-72 h-72 rounded-full overflow-hidden"><img${attr("src", profile)} alt="Chun Zheng" class="w-full h-auto object-cover"></div></div> `;
  Resume($$payload, {});
  $$payload.out += `<!---->`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DTlXv9Ba.js.map
