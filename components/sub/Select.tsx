import { Select, SelectContent, SelectGroup, SelectTrigger, SelectLabel, SelectItem } from '@radix-ui/themes';

export default function CustomSelect() {
  
  function handleLink(url) {
    window.location.href = `#${url}`;
  }
  
  return (
    <Select.Root defaultValue="about"  onValueChange={(e) => handleLink(e)}>
    <Select.Trigger />
    <Select.Content>
      <Select.Group>
        <Select.Item value="about">About me</Select.Item>
        <Select.Item value="skills" >Skills</Select.Item>
        <Select.Item value="projects">Projects</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select.Root>
  )
}
