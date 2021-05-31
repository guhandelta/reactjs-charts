import { Doughnut } from "react-chartjs-2";
import { Grid } from "@material-ui/core";

const DoughnutChart = () => {
    return (
        <div>
            <Grid item>
                <Doughnut 
                    data={{
                        datasets:[{
                            data:["5","5"],
                            // labels: ["value A", "Value B"],
                        }]
                    }}
                    options={{
                        radius: '15%',
                        cutout: 550,
                        responsive: true,
                        maintainAspectRatio: true,
                        hoverBorderColor: '#2ec0ff',
                        hoverBackgroundColor: '#2ec0ff',
                        legend:{
                            display: true
                        },
                        title:{
                            display: true
                        }
                    }}
                />
            </Grid>
        </div>
    )
}


export default DoughnutChart
