const getApi = 'https://79c7-2001-448a-20a0-4169-d4b6-218e-ebfa-7a3a.ngrok-free.app/event'
const img = 'https://79c7-2001-448a-20a0-4169-d4b6-218e-ebfa-7a3a.ngrok-free.app'

const Event = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch(getApi);
            const data = await response.json();
            setEvents(data);
            console.log(events)
        }
        getEvents();
    }, []);
    const tampil = events.map((event) => (
        <div key={event.id}>
            <div>
                <div>
                    {event.festivalName}
                </div>
                <div>
                    {event.price}
                </div>
                <div>
                    {event.performers}
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            {tampil}
        </div>
    );
}