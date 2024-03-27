class Person < ApplicationRecord
  self.table_name = 'persons'
  enum mbti_type:{
    INTJ: 0, INTP: 1, ENTJ: 2, ENTP: 3, #分析家(紫)
    INFJ: 4, INFP: 5, ENFJ: 6, ENFP: 7, #外交官(緑)
    ISTJ: 8, ISFJ: 9, ESFJ: 10, ESTJ: 11, #番人(水色)
    ISTP: 12, ISFP: 13, ESTP: 14, ESFP: 15 #探検家(黄色)
  }

  enum gender: { male: 0, female: 1, other: 2 }

  def self.mbti_type_label(mbti_type)
    I18n.t("enums.mbti_type.#{mbti_type}")
  end

end
