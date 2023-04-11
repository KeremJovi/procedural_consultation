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
import {
	IAppellant,
	IAttorney,
	ICreditor,
	IMovement,
	IStatusProcess,
	Result,
} from '../../contexts/typesConfig';

export interface SingleResult extends Partial<Result> {
	_id?: string;
	numProcess: string;
	court: string;
	description: string;
	startDate: string;
	movements: IMovement[];
	statusProcess: IStatusProcess[];
	creditor: ICreditor;
	appellant: IAppellant;
	attorney: IAttorney[];
}

function Processes({ processObj }: { processObj: SingleResult }) {
	return (
		<div>
			<Menu />
			<ProcessesTitile>
				<TitleCuston>
					Process n. {processObj.numProcess} do {processObj.court}
				</TitleCuston>
				<DateProcess>Distribuído em {processObj.startDate}</DateProcess>
			</ProcessesTitile>
			<ProcessesBody>
				<ProcessesMovements>
					<MovementsDiv>
						<TitleMovements>Movimentações</TitleMovements>
					</MovementsDiv>
					<Spacer />
					<Records>
						{processObj.movements.map((movement: IMovement) => (
							<div key={movement.updateDescription}>
								<DateProcess>{movement.updateDate}</DateProcess>
								<DesciptionRecords>
									{movement.updateDescription}
								</DesciptionRecords>
								<Spacer />
							</div>
						))}
					</Records>
				</ProcessesMovements>
				<DetailsSideBar>
					<Details>
						<DetailsDiv>
							<TitleSideBar>Detalhes</TitleSideBar>
						</DetailsDiv>
						{processObj.statusProcess.map((statusProcess: IStatusProcess) => (
							<div key={statusProcess.status}>
								<DetailsStatus>{statusProcess.status}</DetailsStatus>
							</div>
						))}
						<Spacer />
					</Details>
					<InvolvedSideBar>
						<div>
							<TitleSideBar>Partes Envolvidas</TitleSideBar>
						</div>
						<div>
							<PeopleInvolved href={processObj.creditor.link}>
								{processObj.creditor.name}
							</PeopleInvolved>
							<Involved>Parte Envolvida - Exequente</Involved>
						</div>
						<div>
							<PeopleInvolved href={processObj.appellant.link}>
								{processObj.appellant.name}
							</PeopleInvolved>
							<Involved>Parte Envolvida - Apelante</Involved>
						</div>
						{processObj.attorney.map((attorney: IAttorney) => (
							<div key={attorney.name}>
								<PeopleInvolved href={attorney.link}>
									{attorney.name}
								</PeopleInvolved>
								<Involved>Advogado Envolvido</Involved>
							</div>
						))}
					</InvolvedSideBar>
				</DetailsSideBar>
			</ProcessesBody>
		</div>
	);
}

export default Processes;
