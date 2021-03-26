
const listSkills = () => {
    const skills = [{ title: 'Python', value: '90%' }]
    skills.map((v, i) => (

        document.getElementsByClassName('list-skills')
        <div class="skillBox ">
            <div class="d-flex justify-content-between">
                <p>{v.title}</p>
                <p>{v.value}</p>
            </div>
            <div class="skill">
                <div class="skill_level" style="width:90%"></div>
            </div>
        </div>))
}