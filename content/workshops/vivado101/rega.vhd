----------------------------------------------------------------------------------
-- Company: 
-- Engineer: 
-- 
-- Create Date: 11/16/2024 11:22:34 AM
-- Design Name: 
-- Module Name: rega - Behavioral
-- Project Name: 
-- Target Devices: 
-- Tool Versions: 
-- Description: 
-- 
-- Dependencies: 
-- 
-- Revision:
-- Revision 0.01 - File Created
-- Additional Comments:
-- 
----------------------------------------------------------------------------------


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

-- Uncomment the following library declaration if using
-- arithmetic functions with Signed or Unsigned values
--use IEEE.NUMERIC_STD.ALL;

-- Uncomment the following library declaration if instantiating
-- any Xilinx leaf cells in this code.
--library UNISIM;
--use UNISIM.VComponents.all;

entity rega is
 Port ( 
    sensorA : in std_logic;
    sensorB: in std_logic;
    relogio: in std_logic_vector(4 downto 0);
    OK: out std_logic);
end rega;

architecture Behavioral of rega is
    signal r3andr4: std_logic;
    signal r2andr1: std_logic;
    signal relogioand: std_logic;
    signal sensorEval: std_logic;
begin
    r3andr4 <= relogio(4) and not(relogio(3));
    r2andr1 <= not(relogio(2)) and relogio(1);
    relogioand <= relogio(0) and r2andr1 and r3andr4;
    
    sensorEval <= sensorA or not(sensorB);
    
    OK <= relogioand and sensorEval;
end Behavioral;
