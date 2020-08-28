import React, { useState, useEffect } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Documents from './components/Documents';
import Videos from './components/Videos';
import ChatPanel from './components/ChatPanel';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Store from './components/Store';
import Contacts from './components/Contacts'
const useStyles = makeStyles({
	container: {
		height: '50vh',
		maxHeight: '50vh',
		minHeight: '50vh',
		'& > div': {
			height: '50vh',
			maxHeight: '50vh',
			minHeight: '50vh'
		}
	},
	logo: {
		display: 'inline-block',
		width: '4.8rem',
		height: '4.8rem',
		marginRight: '1.34em',
	},
	name: {
		display: 'inline-block',
		fontSize: '4.8rem',
		verticalAlign: 'middle'
	},
	desc: {
		fontSize: '1.2rem',
		textAlign: 'left',
		width: '80%',
		margin: '0.67em auto'
	},
	chat: {
		backgroundColor: '#f7f7f7',
		minWidth: '30%',
		height: '50vh',
	},
	chat_window: {
		display: 'flex'
	},
	chat_title: {
		width: '100%',
		background: '#505050',
		textAlign: 'center',
		padding: '.75rem 0',
		color: '#fff',
		margin: 0
	},
	chat_area: {
		width: '100%'
	}
});

export default function Additional() {
	useEffect(() => {
	  const script = document.createElement('script');

	  script.src = "assets/chat-script.js";

	  document.body.appendChild(script);

	  return () => {
	    document.body.removeChild(script);
	  }
	}, []);

	const classes = useStyles();

	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (event, value) => {
		setSelectedTab(value);
	};

	return (
		<div className={clsx(classes.container, 'w-full flex')}>
			<FusePageSimple
				classes={{
					toolbar: 'border-b-1'
				}}
				header={false}
				contentToolbar={
					<Tabs
						value={selectedTab}
						onChange={handleTabChange}
						indicatorColor="primary"
						textColor="primary"
						variant="scrollable"
						scrollButtons="off"
						className="w-full"
					>
						<Tab className="normal-case" label="Информация об участнике" />
						<Tab className="normal-case" label="Документы" />
						<Tab className="normal-case" label="Видео/Трансляции" />
						<Tab className="normal-case" label="Интернет-магазин" />
						<Tab className="normal-case" label="Контакты" />
					</Tabs>
				}
				content={
					<div className="p-24">
						{selectedTab === 0 && (
							<FuseAnimateGroup
								enter={{
									animation: 'transition.slideLeftBigIn',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
								leave={{
									animation: 'transition.slideRightBigOut',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
							>
								<img
									className={classes.logo}
									src="https://cdn1.flamp.ru/f2ecaa2db38664b62f017f2196b735b9_300_300.jpg"
									alt="University Logo"
								/>
								<Typography className={classes.name}>Аистенок</Typography>
								<Typography className={classes.desc}>
									Родители-одиночки часто не имеют возможности полноценно работать и обеспечивать
									семью: им не с кем оставить детей. Программа «Погода в доме», которую проводит
									крупнейшая на Урале организация по содействию семьям с детьми в трудной жизненной
									ситуации «Аистёнок», оказывает бесплатную услугу группы дневного пребывания. В
									течение пяти часов ребёнок может находиться в Ресурсном центре «Аистёнка», пока его
									родители работают. Так решается несколько важных проблем, с которыми часто
									сталкиваются неполные семьи: ребёнок социализируется и проводит время с педагогами,
									не упуская возможности развиваться, его родители могут работать и обеспечивать
									семью, не думая каждый день о том, с кем оставить детей. В группе дневного
									пребывания за детьми ухаживают и присматривают няни и воспитатели, с ними занимаются
									логопед, психолог. Программа «Погода в доме» реализуется для семей, где ребёнка
									воспитывает один родитель или опекун, не имеющих путёвки в детский сад. Также в
									группу дневного пребывания приходят дети, чьи родители находятся в кризисной
									ситуации (домашнее насилие, опасность для ребёнка и других членов семьи,
									неблагополучная обстановка дома, маргинальный образ жизни родителей.
								</Typography>
							</FuseAnimateGroup>
						)}
						{selectedTab === 1 && (
							<FuseAnimateGroup
								enter={{
									animation: 'transition.slideLeftBigIn',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
								leave={{
									animation: 'transition.slideRightBigOut',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
							>
								<div className="w-full">
									<Documents />
								</div>
							</FuseAnimateGroup>
						)}
						{selectedTab === 2 && (
							<FuseAnimateGroup
								enter={{
									animation: 'transition.slideLeftBigIn',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
								leave={{
									animation: 'transition.slideRightBigOut',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
							>
								<div className="w-full">
									<Videos />
								</div>
							</FuseAnimateGroup>
						)}
						{selectedTab === 3 && (
							<FuseAnimateGroup
								enter={{
									animation: 'transition.slideLeftBigIn',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
								leave={{
									animation: 'transition.slideRightBigOut',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
							>
								<div className="w-full">
									<Store />
								</div>
							</FuseAnimateGroup>
						)}
						{selectedTab === 4 && (
							<FuseAnimateGroup
								enter={{
									animation: 'transition.slideLeftBigIn',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
								leave={{
									animation: 'transition.slideRightBigOut',
									stagger: 100,
									duration: 400,
									delay: 100
								}}
							>
								<div className="w-full">
									<Contacts />
								</div>
							</FuseAnimateGroup>
						)}
					</div>
				}
				innerScroll
			/>
			<div className={classes.chat}>
				<h1 className={classes.chat_title}>Чат</h1>
				<div className={classes.chat_window}>
					<div className={classes.chat_area}>
						<section>
							<div id="messages"></div>
							<input id="chat-input" type="text" placeholder="напишите что-нибудь..." autoFocus />
						</section>
					</div>
					<ChatPanel />
				</div>
			</div>
		</div>
	);
}
