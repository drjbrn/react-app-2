export interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
  createdAt?: string;
  updateAt?: string;
  column?: {
    createdAt: string,
    id: number,
    title: string,
    updateAt: string,
  };
}

export interface SingleTask extends Task {
  column: {
    createdAt: string,
    id: number,
    title: string,
    updateAt: string,
  };
}

export interface Column {
  id: number;
  title: string;
  tasks: Task[];
  createdAt: string;
  updateAt: string;
}

export interface ColumnListItem {
  id: number;
  value: string;
  label: string;
}

export interface History {
  action: string;
  details: string;
  entityId: number;
  entityType: string;
  id: number;
  timestamp: string;
}

export interface PriorityOption {
  id: number;
  value: string;
  label: string;
}

export interface ModalProps {
  modalId: string;
  children: React.ReactNode;
  className?: string;
}

export interface TaskEditorForm {
  column: {
    id: number,
    value: string,
  };
  description: string;
  dueDate: string;
  priority: {
    id: number,
    value: string,
  };
  title: string;
}

export interface TaskItemProps {
  taskId: number;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
}

export interface BoardCardProps {
  setSelectedBoard?: (arg: number) => void;
}

export interface BoardEditorProps {
  isNew?: boolean;
  isEdit?: boolean;
  boardId?: number;
}

export interface FormEditorTitleData {
  title: string;
}

export interface ColumnContainerProps {
  columnId: number;
  columnTitle: string;
  tasks?: Task[];
}

export interface ColumnEditorProps {
  isNewColumn?: boolean;
  isEdit?: boolean;
  columnId?: number;
}

export interface TaskBoardProps {
  boardTitle: string;
  columnList: {
    id: number,
    title: string,
    createdAt: string,
    updateAt: string,
    tasks?: Task[],
  }[];
}

export interface TaskDetailsModalProps {
  id: number;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
}

export interface TaskEditorProps {
  isNewTask?: boolean;
  isEdit?: boolean;
  taskId?: number;
}

export type DateType = string | null | Date;

export type DateRangeType = {
  startDate: DateType,
  endDate: DateType,
};

export type DateValueType = DateRangeType | null;
