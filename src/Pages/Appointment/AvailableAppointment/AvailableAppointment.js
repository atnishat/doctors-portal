import { useQuery } from '@tanstack/react-query';
import { format, isBefore, isToday } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')

            const {data:appointmentOptions =[], refetch, isLoading} = useQuery({
                queryKey:['appointmentOptions', date],
                queryFn: () => fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
                .then(res => res.json())
            })


    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

            if (isLoading) {
                return <Loading></Loading>
            }


    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {/* {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                } */}
                {
                    appointmentOptions.map(option => (
                        // Render only if the appointment date is equal to or after today
                       !isBefore(new Date(selectedDate), new Date()) || isToday(selectedDate) ? (
                            <AppointmentOption
                                key={option._id}
                                appointmentOption={option}
                                setTreatment={setTreatment}
                            />
                        ) : null
                    ))
                }
            </div>
            

            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }

            </section>
    );
};

export default AvailableAppointment;