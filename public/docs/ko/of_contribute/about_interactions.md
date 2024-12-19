# 상호작용에 대하여

`onClick` 및 `onMouseDown` 이벤트를 통해 클라이언트와 상호작용할 수 있습니다. 모든 상호작용은 상호작용 캔버스에서 처리됩니다.

---

## 1. 클릭 상호작용 개요  
사용자는 타일 그리드와 마우스 클릭을 통해 상호작용할 수 있으며, 다음 두 가지 유형이 있습니다:  

- **일반 클릭 (좌클릭)**: 타일을 열거나 커서를 이동할 때 사용.  
- **특수 클릭 (우클릭)**: 타일에 플래그를 설정하거나 해제할 때 사용.  

시스템은 타일 위치를 계산하고, 타일 상태를 평가하여 적절한 동작을 수행합니다.

---

## 2. 좌표 시스템  
사용자가 클릭한 타일을 결정하기 위해 시스템은 다음 좌표 변환을 수행합니다:  

1. **캔버스 좌표**  
   화면 기준의 마우스 클릭 위치를 캔버스 그리드에 맞게 조정.  

2. **상대 타일 좌표**  
   클릭 위치를 타일 그리드 내 상대 위치로 변환. 이는 조정된 클릭 위치를 타일 크기로 나누어 계산하며, 타일 간 여백도 고려.  

3. **절대 타일 좌표**  
   그리드 시작 위치를 기준으로 상대 좌표를 조정하여 타일의 절대 위치를 계산.  

---

## 3. 타일 상태 및 콘텐츠  
그리드의 각 타일은 다음 상태 중 하나를 가질 수 있습니다:  

- **닫힌 타일**: 아직 상호작용하지 않은 타일.  
- **플래그된 타일**: 잠재적 지뢰로 표시된 타일.  
- **열린 타일**: 공개된 타일(지뢰 없음).  
- **범위 외 타일**: 그리드 외부를 클릭한 경우.  

---

## 4. 클릭 유형  
클릭 상호작용의 유형은 마우스 버튼에 따라 결정됩니다:  

| **클릭 유형**    | **마우스 버튼** | **동작**                       |  
|-------------------|----------------|--------------------------------|  
| **일반 클릭**    | 좌클릭         | 타일 열기 또는 이동.           |  
| **특수 클릭**    | 우클릭         | 타일에 플래그 설정 또는 해제.   |  

---

## 5. 타일 상태에 따른 동작  

### 일반 클릭 (좌클릭)  

| **타일 상태**   | **동작**                                      |  
|------------------|-----------------------------------------------|  
| **닫힌 타일**    | 타일을 열어 내용을 공개.                      |  
| **열린 타일**    | 경로가 있을 경우 커서를 해당 타일로 이동.      |  
| **플래그된 타일**| 동작 없음.                                    |  
| **범위 외 타일** | 동작 없음.                                    |  

### 특수 클릭 (우클릭)  

| **타일 상태**   | **동작**                                      |  
|------------------|-----------------------------------------------|  
| **닫힌 타일**    | 타일에 플래그를 설정(의심 타일로 표시).         |  
| **플래그된 타일**| 플래그 해제(닫힌 상태로 되돌림).               |  
| **열린 타일**    | 동작 없음.                                    |  
| **범위 외 타일** | 동작 없음.                                    |  

---

## 6. 타일 이동  
사용자가 열린 타일이나 폭발한 타일을 일반 클릭하면:  

- 시스템이 커서를 클릭된 타일로 이동 시도.  
- 현재 위치에서 목표 타일까지 유효한 경로가 있을 경우에만 이동.  
- 이동 속도는 초당 5타일로 고정.  

---

## 7. 이벤트 처리  
사용자가 타일과 상호작용할 때:  

1. 시스템이 타일 위치(상대 및 절대)를 계산.  
2. 클릭된 타일의 콘텐츠를 검색.  
3. 클릭 유형(일반 또는 특수)을 평가.  
4. 적절한 동작을 수행:  
   - 일반 클릭: 타일 열기.  
   - 특수 클릭: 플래그 설정 또는 해제.  
   - 일반 클릭(유효한 타일): 커서 이동.  

---

## 8. 특수 조건  
- 사용자가 상호작용 중 인접 타일이 폭발하면, 모든 타일 제어가 일정 시간(예: 3분) 동안 제한.  
- 그리드 외부 클릭은 무시되며 "범위 외"로 표시.  