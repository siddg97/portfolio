import React from 'react';
import {
	Grid,
	Header,
	List,
	Button
} from 'semantic-ui-react';

const skills = {
	frontend:[
		{
			name: "HTML",
			icon: '',
			color: 'red',
			href: 'https://html.spec.whatwg.org/multipage/'
		},
		{
			name: "CSS",
			icon: '',
			color: 'yellow',
			href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
		},
		{
			name: "React",
			icon: '',
			color: 'blue',
			href: 'https://reactjs.org/'
		},
		{
			name: "Redux",
			icon: '',
			color: 'violet',
			href: 'https://redux.js.org/'
		},
		{
			name: "Bootstrap",
			icon: '',
			color: 'teal',
			href: 'https://getbootstrap.com/'
		},
		{
			name: "Responsive Design",
			icon: '',
			color: 'green',
			href: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design'
		}
	],
	backend:[
		{
			name: "MySQL",
			icon: '',
			color: 'grey',
			href: 'https://www.mysql.com/'
		},
		{
			name: "NoSQL",
			icon: '',
			color: 'olive',
			href: 'https://nosql-database.org/'
		},
		{
			name: "NodeJS",
			icon: '',
			color: 'green',
			href: 'https://nodejs.org/en/'
		},
		{
			name: "REST",
			icon: '',
			color: 'orange',
			href: 'https://en.wikipedia.org/wiki/Representational_state_transfer'
		},
		{
			name: "API",
			icon: '',
			color: 'red',
			href: 'https://en.wikipedia.org/wiki/Application_programming_interface'
		},
		{
			name: "Express",
			icon: '',
			color: 'blue',
			href: 'https://expressjs.com/'
		}
	],
	lang:[
		{
			name: "C/C++",
			icon: '',
			color: 'blue',
			href: 'https://www.cprogramming.com/'
		},
		{
			name: "JavaScript",
			icon: '',
			color: 'yellow',
			href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{
			name: "Python",
			icon: '',
			color: 'teal',
			href: 'https://docs.python.org/3/'
		},
		{
			name: "R/Rstudio",
			icon: '',
			color: 'grey',
			href: 'https://www.r-project.org/'
		},
		{
			name: "Haskell",
			icon: '',
			color: 'violet',
			href: 'https://www.haskell.org/'
		},
		{
			name: "MATLAB",
			icon: '',
			color: 'olive',
			href: 'https://www.mathworks.com/products/matlab.html'
		}
	],
	tools:[
		{
			name: "GitHub",
			icon: '',
			color: 'yellow',
			href: 'https://github.com/'
		},
		{
			name: "Heroku",
			icon: '',
			color: 'purple',
			href: 'https://www.heroku.com/'
		},
		{
			name: "Docker",
			icon: '',
			color: 'blue',
			href: 'https://www.docker.com/'
		},
		{
			name: "yarn",
			icon: '',
			color: 'teal',
			href: 'https://yarnpkg.com/lang/en/'
		},
		{
			name: "Postman",
			icon: '',
			color: 'orange',
			href: 'https://www.getpostman.com/'
		},
		{
			name: "gdb",
			icon: '',
			color: 'green',
			href: 'https://www.gnu.org/software/gdb/'
		}
	]
}

const headStyle = {
	fontSize: '2em', 
	marginBottom: '1em',
	marginTop: '0.5em',
};


const Frontend = () => (
	<Grid.Column width={8}>
		<Grid.Row
			stretched
			centered
		>
			<Header color='orange' style={headStyle}>
				Frontend Skills
			</Header>
		</Grid.Row>
		<Grid.Row
			stretched
			centered
		>
			<List animated>
			{
				skills.frontend.map((item) => 
					<List.Item key={item.name}>
						<Button
							inverted
							fluid
							circular 
							content={item.name}
							color={item.color}
							href={item.href}
						/>
					</List.Item>
				)
			}
			</List>
		</Grid.Row>
	</Grid.Column>
)

const Backend = () => (
	<Grid.Column width={8}>
		<Grid.Row
			stretched
			centered
		>
			<Header color='orange' style={headStyle}>
				Backend Skills
			</Header>
		</Grid.Row>
		<Grid.Row
			stretched
			centered
		>
			<List animated>
			{
				skills.backend.map((item) => 
					<List.Item key={item.name}>
						<Button 
							inverted
							fluid
							circular 
							content={item.name}
							color={item.color}
							href={item.href}
						/>
					</List.Item>
				)
			}
			</List>
		</Grid.Row>
	</Grid.Column>
)

const Language = () => (
	<Grid.Column width={8}>
		<Grid.Row
			stretched
			centered
		>
			<Header color='orange' style={headStyle}>
				Languages
			</Header>
		</Grid.Row>
		<Grid.Row
			stretched
			centered
		>
			<List animated>
			{
				skills.lang.map((item) => 
					<List.Item key={item.name}>
						<Button 
							inverted
							fluid
							circular 
							content={item.name}
							color={item.color}
							href={item.href}
						/>
					</List.Item>
				)
			}
			</List>
		</Grid.Row>
	</Grid.Column>
)

const Tools = () => (
	<Grid.Column width={8}>
		<Grid.Row
			stretched
			centered
		>			
			<Header color='orange' style={headStyle}>
				Tools
			</Header>
		</Grid.Row>
		<Grid.Row
			stretched
			centered
		>
			<List animated>
			{
				skills.tools.map((item) => 
					<List.Item key={item.name}>
						<Button
							inverted
							fluid 
							circular 
							content={item.name}
							color={item.color}
							href={item.href}
						/>
					</List.Item>
				)
			}
			</List>
		</Grid.Row>
	</Grid.Column>
)

const Skills = () => (
	<Grid
		inverted
		stretched
		stackable
		container
		relaxed
		verticalAlign='middle'
	>
		<Frontend />
		<Backend />
		<Language />
		<Tools />
	</Grid>
);

export default Skills;