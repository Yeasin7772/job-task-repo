import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Benefit = () => {
    const axiosPublic = useAxiosPublic()
    const [benefitData, setBenefitData] = useState()

    useEffect(() => {
        axiosPublic.get("/benefit")
            .then((res) => {
                //console.log(res.data);
                setBenefitData(res.data)
            });
    }, []);

    return (
        <div className="mt-10 mb-10">
            <div className="text-3xl font-bold text-center my-10">what type of people are using this website</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    benefitData?.map(benefit => <div key={benefit._id}>
                        <div className="card   shadow-xl glass">
                            <div className="card-body">
                                <h2 className="card-title">{benefit?.userType}</h2>
                                <p>{benefit?.benefits}</p>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Benefit;