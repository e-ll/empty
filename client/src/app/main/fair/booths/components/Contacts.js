import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Cart from './Cart'
const useStyles = makeStyles({
	full_height: {
		height: '700px'
	}
});

export default function Contacts() {
	const classes = useStyles();

	return (
		<div className={classes.full_height}>
			<Typography>
				О фонде Адресная помощь Проекты Отчеты Помочь +7 (343) 222 02 50 г.Екатеринбург, ул.Толмачева, 11
				info@roizmanfond.ru
			</Typography>
			<Cart />
		</div>
	);
}
