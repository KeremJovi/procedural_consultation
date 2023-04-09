import React from 'react';
import moment from 'moment';
import Menu from '../Menu';
import {
	DateProcess,
	DesciptionRecords,
	Details,
	DetailsDiv,
	DetailsSideBar,
	DetailsStatus,
	Involved,
	InvolvedSideBar,
	MovementsDiv,
	PeopleInvolved,
	ProcessesBody,
	ProcessesMovements,
	ProcessesTitile,
	Records,
	Spacer,
	TitleCuston,
	TitleMovements,
	TitleSideBar,
} from './style';

interface ProcessesProps {
	numProcess: string;
	court: string;
	startDate: Date;
	updateDate: Date;
	upDescription: string;
	status: string;
	creditor: {
		name: string;
		link: string;
	};
	appellant: {
		name: string;
		link: string;
	};
	attorney: {
		name: string;
		link: string;
	}[];
}

function Processes({
	numProcess,
	court,
	startDate,
	updateDate,
	upDescription,
	status,
	creditor,
	appellant,
	attorney,
}: ProcessesProps) {
	return (
		<div>
			<Menu />
			<ProcessesTitile>
				<TitleCuston>
					Process n. {numProcess} do {court}
				</TitleCuston>
				<DateProcess>
					Distribuído em {moment(startDate).format('DD/MM/YYYY')}
				</DateProcess>
			</ProcessesTitile>
			<ProcessesBody>
				<ProcessesMovements>
					<MovementsDiv>
						<TitleMovements>Movimentações</TitleMovements>
					</MovementsDiv>
					<Spacer />
					<Records>
						<DateProcess>{moment(updateDate).format('DD/MM/YYYY')}</DateProcess>
						<DesciptionRecords>{upDescription}</DesciptionRecords>
					</Records>
					<Spacer />
				</ProcessesMovements>
				<DetailsSideBar>
					<Details>
						<DetailsDiv>
							<TitleSideBar>Detalhes</TitleSideBar>
						</DetailsDiv>
						<div>
							<DetailsStatus>{status}</DetailsStatus>
						</div>
					</Details>
					<Spacer />
					<InvolvedSideBar>
						<div>
							<TitleSideBar>Partes Envolvidas</TitleSideBar>
						</div>
						<div>
							<PeopleInvolved href={creditor.link}>
								{creditor.name}
							</PeopleInvolved>
							<Involved>Parte Envolvida - Exequente</Involved>
						</div>
						<div>
							<PeopleInvolved href={appellant.link}>
								{appellant.name}
							</PeopleInvolved>
							<Involved>Parte Envolvida - Apelante</Involved>
						</div>
						<div>
							<PeopleInvolved href={attorney[0].link}>
								{attorney[0].name}
							</PeopleInvolved>
							<Involved>Advogado Envolvido</Involved>
						</div>
						<div>
							<PeopleInvolved href={attorney[1].link}>
								{attorney[1].name}
							</PeopleInvolved>
							<Involved>Advogado Envolvido</Involved>
						</div>
					</InvolvedSideBar>
				</DetailsSideBar>
			</ProcessesBody>
		</div>
	);
}

export default Processes;
