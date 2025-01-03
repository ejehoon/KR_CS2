export type ResearchField = {
  name: string;
  subFields: string[];
  isEnabled: boolean;
};

export type ResearchCategory = {
  name: string;
  fields: ResearchField[];
};

export type LabSize = 'large' | 'medium' | 'small' | 'unknown';

export type ProfessorField = {
  category: string;
  field: string;
  subFields: string[];
};

export type Professor = {
  id: string;
  name: string;
  department: string;
  paperCount: number;
  labMemberCount: number | null;
  labUrl?: string | null;
  scholarUrl?: string | null;
  dblpUrl?: string | null;
  researchFields: ProfessorField[];
};

export type University = {
  name: string;
  paperCount: number;
  labCount: number;
  professors: Professor[];
};

// 선택된 세부 분야를 관리하기 위한 타입
export type SelectedSubFields = {
  [fieldName: string]: string[]; // key: field name (e.g., 'Systems'), value: array of selected subfields
};

// Supabase 응답 타입 추가
export type ProfessorFromDB = {
  id: string;
  name: string;
  department: string;
  paper_count: number;
  lab_member_count: number | null;
  lab_url: string | null;
  scholar_url: string | null;
  dblp_url: string | null;
  research_sub_fields: number[];
  universities: {
    id: string;
    name: string;
  };
};

// Supabase 에러 타입 추가
export type PostgrestError = {
  message: string;
  details: string;
  hint: string;
  code: string;
};

// Supabase 응답 타입 추가
export type SubFieldFromDB = {
  id: number;
  name: string;
  research_fields: {
    id: number;
    name: string;
    category_id: number;
  };
};

// professor_research_fields 타입 추가
export type ProfessorResearchFieldFromDB = {
  research_fields: {
    id: number;
    name: string;
    category_id: number;
  };
  professor_sub_fields: {
    research_sub_fields: {
      id: number;
      name: string;
    };
  }[];
}; 