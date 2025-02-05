import { TeamDto } from "../types/team";

export async function getTeams(email?: string | null) {

    if (!email) {
        return [] as TeamDto[];
    }
    //return a placeholder json

    let mockTeam: TeamDto[] = [{
        id: 1,
        name: 'Community',
        logo: 'https://example.com/team-logo.png'
    },
    {
        id: 2,
        name: 'Platform',
        logo: 'https://example.com/team-logo.png'
    }];
    
    return mockTeam
}