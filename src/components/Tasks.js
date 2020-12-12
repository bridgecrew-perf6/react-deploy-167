import React, {useState, useEffect} from 'react';
import { Checkbox } from '../components/Checkbox';
import { useTasks} from '../hooks';
import { AddTask } from './AddTask';
import { collatedTasks} from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist} from '../helpers';
import {useSelectedProjectValue, useProjectsValue} from '../context';


export const Tasks = () => {
    const {selectedProject} = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const {tasks} = useTasks(selectedProject);

    let projectName = '';


    if (projects && selectedProject && !collatedTasksExist(selectedProject)){
        projectName = getTitle(projects, selectedProject).name;
        console.log('projectName 1: ', projectName);
    }

    if (collatedTasksExist(selectedProject) && selectedProject ) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
        console.log('projectName 2: ', projectName);

    }

    useEffect(() => {
        document.title = `${projectName}: Task!`
    });


    return (
        <div className="tasks" data-testid="tasks">
          <h2 data-testid="project-name">{projectName}</h2>
    
          <ul className="tasks__list">
            {tasks.map((task) => (
              <li key={`${task.id}`}>
                <Checkbox id={task.id} taskDesc={task.task} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>
        
        <AddTask />
        </div>
      );

    
    
}