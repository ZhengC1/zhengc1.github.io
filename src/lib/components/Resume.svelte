<script>
	// Personal Information
	export let name = 'Chun Zheng';
	export let title = 'Senior Software Engineer';
	export let email = 'Zhengc42@gmail.com';
	export let phone = '984-888-4044';
	export let location = 'Apex, NC';

	// Professional Experience
	export let experience = [
		{
			title: 'Senior Software Engineer',
			company: 'Sonic Automotive',
			location: 'Remote',
			startDate: 'Sept 2024',
			endDate: 'Current',
			jobType: 'Contract',
			achievements: [
				'Mentor team members towards technical excellence and career advancement.',
				'Worked on Sonics auto appraisal platforms in Python C# backend with an Angular frontend'
			]
		},
		{
			title: 'Senior Software Engineer',
			company: 'Capital One',
			location: 'McLean, VA',
			startDate: 'May 2022',
			endDate: 'Sept 2024',
			jobType: 'Full Time',
			achievements: [
				'Using Docker with AWS Glue and AWS Step Functions with Lambda, created a new workflow to replace a deprecated legacy system reducing downtime and operating costs',
				'Standardized practices and code across teams by writing new tooling to increase team velocity with Python and Capital One’s in house Terraform wrapper',
				'Managed Agile ceremonies including retrospectives, ticket creation and PI Planning'
			]
		},
		{
			title: 'Software Engineer II',
			company: 'Ntrepid LLC',
			location: 'Reston, VA',
			startDate: 'Dec 2019',
			endDate: 'May 2022',
			jobType: 'Full Time',
			achievements: [
				'Set up and maintain the celery asynchronous task queue and the RabbitMQ message broker with ECS containers',
				'Create and maintain parts of infrastructure such as the Elastic Container Service cluster using Terraform, Jenkins, Ansible and Python 3.7.9',
				'Created a REST API using FastAPI, Swagger and SQLAlchemy so clients could schedule long running periodic, celery tasks'
			]
		},
		{
			title: 'Contractor',
			company: 'Thompson Technology',
			location: 'Atlanta, GA',
			startDate: 'Apr 2019',
			endDate: 'Dec 2019',
			jobType: 'Contract',
			achievements: [
				' Developed code-generation tool to create skeleton structures for interacting with various AWS offerings using Cloudformation',
				' Mentor engineers during on-call rotations on how to build, execute and improve their deployment pipelines'
			]
		},
		{
			title: 'Software Engineer',
			company: 'Oracle',
			location: 'Durham, NC',
			startDate: 'Nov 2016',
			endDate: 'Apr 2019',
			jobType: 'Full Time',
			achievements: [
				'Programmed Python and Java for internal Hadoop Automation Manager',
				'Added new features to internal MySQL management CLI written in Python 2',
				'Administered production and staging Zookeeper, Hbase, Hadoop and MySQL'
			]
		}
	];

	// Education
	export let education = [
		{
			degree: 'Bachelor of Science in Computer Science',
			institution: 'Appalachian State University',
			year: '2016'
		}
	];

	// Skills
	export let skills = [
		'Python',
		'Java',
		'C#',
		'Angular',
		'Vim',
		'Git',
		'Vagrant',
		'Docker',
		'Jenkins',
		'docker-compose',
		'Ansible',
		'Terraform',
		'Selenium',
		'RabbitMQ',
		'Celery',
		'Flower',
		'FastAPI',
		'AWS ECS',
		'S3',
		'ES',
		'Lambda'
	];

	// Projects (Optional)
	export let projects = [];

	// Certifications (Optional)
	export let certifications = [
		{
			name: 'AWS Certified Solutions Architect',
			issuer: 'Amazon Web Services',
			date: '2023'
		}
	];

	// Theme colors
	export let primaryColor = '#2c3e50';
	export let accentColor = '#3498db';
	export let textColor = '#111827';
	export let backgroundColor = '#ffffff';

	// Print functionality
	function printResume() {
		window.print();
	}
</script>

<svelte:head>
	<title>{name} - Resume</title>
	<style>
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
	</style>
</svelte:head>

<div class="min-h-screen bg-gray-50 px-8 py-8 print:bg-white print:p-0">
	<!-- Resume Container -->
	<div
		class="resume-container mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-16 shadow-lg border border-gray-200"
	>

		<!-- Header - Centered -->
			<h1 class="mb-2 text-4xl font-bold text-center" style="color: {primaryColor}">{name}</h1>

			<!-- Contact details in a centered row -->
			<div class="mb-4 flex flex-wrap justify-center gap-x-6">
				<p class="text-gray-700"><span class="font-medium">Email:</span> {email}</p>
				<p class="text-gray-700"><span class="font-medium">Phone:</span> {phone}</p>
		</div>

		<!-- Line bar between Experience and Education -->
		<div class="mb-6 h-1 w-full rounded-full" style="background-color: {accentColor}"></div>


		<!-- Experience Section -->
		<section class="mb-6">
			{#each experience as job}
				<div class="mb-6">
					<div class="mb-2 flex items-start justify-between md:flex-row md:items-center">
						<h4 class="text-lg font-bold" style="color: {primaryColor}">
							{job.title}
						</h4>
						<p class="text-sm rounded-full bg-gray-200 px-2 py-1 font-small text-gray-600">
							{job.jobType}
						</p>
					</div>
					<div class="flex justify-between">
						<p class="text-sm text-gray-600 font-medium">{job.company}</p>
						<p class="text-sm text-gray-600 ">{job.startDate} - {job.endDate}</p>
					</div>
					<ul class="flex flex-col list-disc list-outside pl-9">
						{#each job.achievements as achievement}
							<li class="items-center text-sm text-gray-800">{achievement}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</section>
		<!-- Skills Section -->

		<section class="mb-8">
			<h3
				class="mb-4 border-b pb-2 text-xl font-bold text-center"
				style="color: {primaryColor}; border-color: {accentColor}"
			>
				Skills
			</h3>

			<div class="flex flex-wrap">
				{#each skills as skill}
					<span
						class="mr-2 mb-2 rounded px-3 py-1 text-sm font-medium"
						style="background-color: {accentColor}20; color: {primaryColor}"
					>
						{skill}
					</span>
				{/each}
			</div>
		</section>

		<!-- Projects Section (if provided) -->
		{#if projects && projects.length > 0}
			<section class="mb-8">
				<h3
					class="mb-4 border-b pb-2 text-xl font-bold text-center"
					style="color: {primaryColor}; border-color: {accentColor}"
				>
					Projects
				</h3>

				{#each projects as project}
					<div class="mb-4">
						<h4 class="text-lg font-bold" style="color: {primaryColor}">{project.name}</h4>
						<p class="mb-2 text-gray-800">{project.description}</p>
						<p class="mb-1">
							<span class="font-medium">Technologies:</span>
							{project.technologies.join(', ')}
						</p>
						{#if project.link}
							<p><span class="font-medium">Link:</span> {project.link}</p>
						{/if}
					</div>
				{/each}
			</section>
		{/if}

		<!-- Certifications Section (if provided) -->
		{#if certifications && certifications.length > 0}
			<section>
				<h3
					class="mb-4 border-b pb-2 text-xl font-bold text-center"
					style="color: {primaryColor}; border-color: {accentColor}"
				>
					Certifications
				</h3>

				<div class="flex flex-col flex-wrap md:flex-row">
					{#each certifications as cert}
						<div class="mr-6 mb-4">
							<p class="font-bold" style="color: {primaryColor}">{cert.name}</p>
							<p class="text-gray-600">{cert.issuer} · {cert.date}</p>
						</div>
					{/each}
				</div>
			</section>
		{/if}
		<!-- Education Section -->
		<section class="mb-8">
			<h3
				class="border-b pb-2 text-xl font-bold text-center"
				style="color: {primaryColor}; border-color: {accentColor}"
			>
				Education
			</h3>

			{#each education as edu}
				<div class="mb-6">
					<div class="mb-2 flex flex-col items-start justify-between md:flex-row md:items-center">
						<h4 class="text-lg font-bold" style="color: {primaryColor}">{edu.degree}</h4>
						<h4 class="mb-2 text-gray-600">
							{edu.institution}
							{edu.year}
						</h4>
					</div>
					{#if edu.achievements && edu.achievements.length > 0}
						<ul class="list-disc pl-5">
							{#each edu.achievements as achievement}
								<li class="mb-1 text-gray->
800">{achievement}</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</section>


	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	@import 'tailwindcss';
	@plugin '@tailwindcss/typography';
	@theme {
		--font-roboto: 'Roboto', 'sans-serif';
	}
</style>
