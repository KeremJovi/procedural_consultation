import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Processes, { SingleResult } from '../../components/Processes';
import { getProcessDetails } from '../../services/req/processes_db';
import { Result } from '../../contexts/typesConfig';

function Details() {
	const { id } = useParams();
	const [process, setProcess] = useState<SingleResult>({
		_id: '',
		numProcess: '',
		court: '',
		description: '',
		startDate: '',
		movements: [],
		statusProcess: [],
		creditor: { name: '', link: '' },
		appellant: { name: '', link: '' },
		attorney: [],
	});
	const [loading, setLoading] = useState(false);

	const fetchDetailsProcess = async (processId: string) => {
		try {
			setLoading(true);
			const { data } = await getProcessDetails(processId);
			console.log(data);
			setProcess(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			alert('Ops, não foi possível carregar as informações');
		}
	};

	useEffect(() => {
		if (id !== undefined) {
			fetchDetailsProcess(id);
		}
	}, [id]);

	return (
		<div>
			<Processes processObj={process} />
		</div>
	);
}

export default Details;
