import React from 'react';
import { Users, BookOpen, UserCheck, Star, List } from 'lucide-react';

export const homeStats = [
    {
        icon: <Users className="w-8 h-8" />,
        target: 15000,
        label: "Expert Instructors"
    },
    {
        icon: <List className="w-8 h-8" />,
        target: 1754,
        label: "Total Courses"
    },
    {
        icon: <UserCheck className="w-8 h-8" />,
        target: 10000,
        label: "Happy Students"
    },
    {
        icon: <Star className="w-8 h-8" />,
        target: 654,
        label: "Creative Events"
    }
];
