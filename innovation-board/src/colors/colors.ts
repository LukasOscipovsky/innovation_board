
const statusColors: { [id: number]: string; } = {};
statusColors[0] = "#f8fc00";
statusColors[1] = "#A52A2A";
statusColors[2] = "#006400";

export default function getStatusColor(value: number): string {
    return statusColors[value];
}