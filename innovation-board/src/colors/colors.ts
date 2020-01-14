
const statusColors: { [id: number]: string; } = {};
statusColors[0] = "#f8fc00";
statusColors[1] = "#FF4136";
statusColors[2] = "#01FF70";
statusColors[3] = "#DCDCDC";

const priorityColors: { [id: number]: string; } = {};
priorityColors[0] = "#01FF70";
priorityColors[1] = "#FF851B";
priorityColors[2] = "#FF4136";

export const getStatusColor = (value: number): string => {
    return statusColors[value];
}

export const getPriorityColor = (value: number): string => {
    return priorityColors[value];
}

